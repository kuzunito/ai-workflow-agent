# AI Workflow Agent - Complete Project
# Java 21 + Spring Boot 3.2 + React 18

# PROJECT STRUCTURE
# =================
ai-workflow-agent/
├── backend/
│   ├── pom.xml                          # Maven build config (Spring Boot 3.2.5, Java 21)
│   └── src/main/java/com/aiworkflowagent/
│       ├── AiWorkflowAgentApplication.java      # Main entry point
│       ├── model/
│       │   ├── User.java           # User entity
│       │   ├── Workflow.java       # Workflow entity (triggers/actions/conditions)
│       │   ├── Execution.java      # Execution history
│       │   ├── Webhook.java        # Webhook integrations
│       │   └── AuditLog.java       # Audit trail
│       ├── repository/
│       │   ├── UserRepository.java
│       │   ├── WorkflowRepository.java
│       │   ├── ExecutionRepository.java
│       │   ├── WebhookRepository.java
│       │   └── AuditLogRepository.java
│       ├── service/
│       │   ├── AiService.java         # AI workflow processing (OpenAI)
│       │   ├── WorkflowService.java   # Workflow execution engine
│       │   ├── AuditLogService.java
│       │   ├── ExecutionService.java
│       │   ├── WebhookService.java
│       │   └── JwtService.java
│       ├── controller/
│       │   ├── AuthController.java    # /api/auth/register, /login
│       │   ├── WorkflowController.java # /api/workflows/{id}/trigger
│       │   ├── ExecutionController.java # /api/executions
│       │   ├── WebhookController.java # /api/webhooks
│       │   └── JwtController.java
│       └── resources/
│           └── application.yml        # Configuration
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── components/
│       │   └── Navbar.js
│       └── pages/
│           ├── Login.js
│           ├── Dashboard.js
│           ├── Workflows.js
│           ├── WorkflowEditor.js
│           ├── Executions.js
│           └── Webhooks.js
│
└── build.py / build.sh                # Build scripts

├── workflow-templates/
│   ├── invoice-ocr-classification.json    # Invoice OCR + GL classification
│   ├── lead-capture-routing.json          # Lead capture from web forms
│   ├── automated-followup.json            # Daily follow-up for leads
│   ├── invoice-summarization.json         # Summarize invoices for accounting
│   ├── document-processing-queue.json     # Legal/healthcare document routing
│   ├── crm-data-sync.json                 # 15-min CRM data sync
│   └── customer-onboarding-bot.json       # Welcome new customers
