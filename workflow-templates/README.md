# AI Workflow Templates Library

This directory contains pre-built workflow templates for common business automation scenarios.

## Available Templates

### 1. invoice-ocr-classification.json
**Vertical:** Accounting & Bookkeeping  
**Triggers:** Webhook (QuickBooks, Gmail), Schedule (daily)  
**Description:** Automatically extract invoice data, classify by GL code, and save to database when invoice arrives.

### 2. lead-capture-routing.json
**Vertical:** Real Estate / Sales  
**Triggers:** Webhook (web form, Gmail), Send (email, Slack)  
**Description:** Capture leads from website forms, qualify them with AI, and route to the right sales team.

### 3. automated-followup.json
**Vertical:** Home Services / Sales  
**Triggers:** Schedule (daily 9AM)  
**Description:** Send personalized follow-up emails to leads who haven't been contacted in 24 hours.

### 4. invoice-summarization.json
**Vertical:** Accounting & Bookkeeping  
**Triggers:** Webhook (Gmail), Schedule (daily)  
**Description:** Summarize raw invoice text into structured financial data for accounting entries.

### 5. document-processing-queue.json
**Vertical:** Legal Services / Healthcare  
**Triggers:** Webhook (Dropbox, Drive), Manual  
**Description:** Route legal/healthcare documents for manual review with AI pre-classification.

### 6. crm-data-sync.json
**Vertical:** All  
**Triggers:** Schedule (every 15min)  
**Description:** Sync data between systems every 15 minutes with AI-powered cleaning and transformation.

### 7. customer-onboarding-bot.json
**Vertical:** All  
**Triggers:** Webhook (CRM new customer, signup form)  
**Description:** Welcome new customers, setup their account, and trigger personalized training videos.

## Template Format

Each template is a JSON file with the following fields:

```json
{
  "name": "Workflow Name",
  "description": "What this workflow does",
  "status": "active",
  "triggers": "trigger1,trigger2",
  "conditions": "condition1",
  "actions": "action1,action2",
  "aiConfig": "model:gpt-4o-mini,temperature:0.3",
  "execution_count": 0,
  "last_executed_at": null,
  "created_at": "2026-10-15T02:00:00Z",
  "version": 1
}
```

## Adding New Templates

1. Create a new `.json` file in this directory
2. Follow the template format above
3. Update this README with the new template
4. Push to GitHub

## Using Templates

Templates can be loaded into the workflow builder UI or imported via the API:

```bash
# Import a template via API
curl -X POST http://localhost:8080/api/workflows/import \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d @workflow-templates/invoice-ocr-classification.json
```
