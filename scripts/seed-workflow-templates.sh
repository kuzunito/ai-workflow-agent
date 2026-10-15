#!/bin/bash
# Seed workflow templates on application startup
# Run this script after deploying the backend

echo "=== Seeding workflow templates ==="

# Path to the workflow templates directory
TEMPLATES_DIR="workflow-templates"

# Check if templates directory exists
if [ ! -d "$TEMPLATES_DIR" ]; then
    echo "Error: workflow-templates directory not found"
    exit 1
fi

# Load each template and import via API
for template in "$TEMPLATES_DIR"/*.json; do
    echo "Importing: $(basename "$template")"
    curl -s -X POST http://localhost:8080/api/workflows/import \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $JWT_TOKEN" \
        -d @"$template"
    echo ""
done

echo "=== Seeding complete ==="
