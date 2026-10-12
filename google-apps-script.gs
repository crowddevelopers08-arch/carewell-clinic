/**
 * ============================================================================
 *  Carewell Clinic — Google Sheet webhook (Apps Script Web App)
 * ============================================================================
 *
 *  Receives every form submission from the website
 *  (app/api/submissions/route.ts  ->  pushToSheet()) and writes ONE row.
 *
 *  ROUTING:
 *    - Booking / consultation leads      ->  "Submissions" tab
 *    - Review-funnel leads (/review)     ->  "Reviews" tab
 *    - Treatment-page contact form leads ->  "LHR Treatments" tab
 *
 *  Each type is written ONLY to its own tab — never to "Submissions" as well.
 *
 *  ------------------------------------------------------------------------
 *  HOW TO INSTALL (one time — takes ~1 minute):
 *  ------------------------------------------------------------------------
 *  1. Open the Google Sheet ("Carewell-Clinic").
 *  2. Menu:  Extensions  ->  Apps Script.
 *  3. Delete everything in the editor, paste THIS ENTIRE FILE, press Ctrl+S.
 *  4. (Optional test) In the toolbar function dropdown choose "setupAllTabs"
 *     and click Run. Empty "Reviews" and "LHR Treatments" tabs (with headers)
 *     appear if they don't already exist. This proves the script is valid.
 *  5. Deploy the change so the website starts using it:
 *        Deploy  ->  Manage deployments
 *        -> click the pencil (edit) on the existing "Web app" deployment
 *        -> Version:  New version
 *        -> Deploy
 *     The Web App URL does NOT change, so nothing in .env needs editing.
 *
 *  IMPORTANT: editing the code is not enough — step 5 (New version) is what
 *  makes the live website use the new code.
 * ============================================================================
 */

// ---- Tab names -------------------------------------------------------------
// Must match the tab your booking leads already land on. Yours is "Submissions".
var LEADS_TAB         = 'Submissions';
var REVIEWS_TAB       = 'Reviews';
var LHR_TREATMENTS_TAB = 'LHR Treatments';

// ---- Column layouts ------------------------------------------------------
var LEADS_HEADERS = [
  'Timestamp', 'Source', 'Name', 'Phone', 'Concern', 'URL', 'TeleCRM'
];

var REVIEWS_HEADERS = [
  'Timestamp', 'Source', 'Name', 'Phone', 'Rating', 'Callback', 'Message', 'URL', 'TeleCRM'
];

var LHR_TREATMENTS_HEADERS = [
  'Timestamp', 'Source', 'Name', 'Phone', 'Concern', 'URL', 'TeleCRM'
];

var REVIEW_SOURCE = 'Review Page';
var LHR_TREATMENT_SOURCE = 'lhr treatment';

// ==========================================================================
//  Web app entry points
// ==========================================================================

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOut_({ success: false, error: 'No POST body received' });
    }

    var data = JSON.parse(e.postData.contents);

    if (isReview_(data)) {
      var reviews = getSheet_(REVIEWS_TAB, REVIEWS_HEADERS);
      reviews.appendRow(reviewRow_(data));
      return jsonOut_({ success: true, tab: REVIEWS_TAB });
    }

    if (isLhrTreatment_(data)) {
      var lhrTreatments = getSheet_(LHR_TREATMENTS_TAB, LHR_TREATMENTS_HEADERS);
      lhrTreatments.appendRow(lhrTreatmentRow_(data));
      return jsonOut_({ success: true, tab: LHR_TREATMENTS_TAB });
    }

    var leads = getSheet_(LEADS_TAB, LEADS_HEADERS);
    leads.appendRow(leadRow_(data));
    return jsonOut_({ success: true, tab: LEADS_TAB });

  } catch (err) {
    return jsonOut_({ success: false, error: String(err) });
  }
}

function doGet() {
  return jsonOut_({
    status: 'ok',
    message: 'Carewell webhook live. Leads -> "' + LEADS_TAB + '", reviews -> "' + REVIEWS_TAB + '", LHR treatment leads -> "' + LHR_TREATMENTS_TAB + '".'
  });
}

// ==========================================================================
//  Manual helper — run once from the editor to create all tabs now
// ==========================================================================

function setupAllTabs() {
  getSheet_(LEADS_TAB, LEADS_HEADERS);
  getSheet_(REVIEWS_TAB, REVIEWS_HEADERS);
  getSheet_(LHR_TREATMENTS_TAB, LHR_TREATMENTS_HEADERS);
}

// ==========================================================================
//  Helpers
// ==========================================================================

function isReview_(data) {
  if (data.isReview === true) return true;
  return String(data.source || '').toLowerCase() === REVIEW_SOURCE.toLowerCase();
}

function isLhrTreatment_(data) {
  if (data.isLhrTreatment === true) return true;
  return String(data.source || '').toLowerCase() === LHR_TREATMENT_SOURCE.toLowerCase();
}

function getSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// The website sends the customer's text in `concern` as
//   "<message> | Rating: 3/5 | Callback: Yes"
// It also sends a pre-cleaned `message`. Prefer that, fall back to splitting.
function reviewMessage_(data) {
  if (data.message) return String(data.message);
  return String(data.concern || '').split(' | Rating:')[0].trim();
}

function reviewRow_(data) {
  if (Object.prototype.toString.call(data.reviewRow) === '[object Array]' && data.reviewRow.length) {
    return data.reviewRow;
  }
  return [
    data.timestamp || new Date().toISOString(),
    data.source || REVIEW_SOURCE,
    data.name || '',
    data.phone || '',
    data.rating || '',
    data.callback || '',
    reviewMessage_(data),
    data.pageUrl || data.url || '',
    data.telecrm || ''
  ];
}

function lhrTreatmentRow_(data) {
  if (Object.prototype.toString.call(data.lhrTreatmentRow) === '[object Array]' && data.lhrTreatmentRow.length) {
    return data.lhrTreatmentRow;
  }
  return [
    data.timestamp || new Date().toISOString(),
    data.source || LHR_TREATMENT_SOURCE,
    data.name || '',
    data.phone || '',
    data.concern || '',
    data.pageUrl || data.url || '',
    data.telecrm || ''
  ];
}

function leadRow_(data) {
  if (Object.prototype.toString.call(data.row) === '[object Array]' && data.row.length) {
    return data.row;
  }
  return [
    data.timestamp || new Date().toISOString(),
    data.source || '',
    data.name || '',
    data.phone || '',
    data.concern || '',
    data.pageUrl || data.url || '',
    data.telecrm || ''
  ];
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
