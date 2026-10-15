package com.aiworkflowagent.controller;

import com.aiworkflowagent.model.Workflow;
import com.aiworkflowagent.repository.WorkflowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/workflows")
public class WorkflowImportController {

    @Autowired
    private WorkflowRepository workflowRepository;

    @PostMapping("/import")
    public ResponseEntity<?> importTemplate(@RequestBody String templateJson) {
        try {
            // Parse the JSON template
            // In a real app, you'd use Jackson to parse this
            Workflow workflow = new Workflow();
            workflow.setName("Imported Workflow");
            workflow.setDescription("Imported from template");
            workflow.setStatus("active");
            workflow.setTriggers("webhook:manual");
            workflow.setActions("ai:process");
            workflow.setConditions("true");
            workflow.setAiConfig("model:gpt-4o-mini,temperature:0.3");
            workflow.setExecutionCount(0);

            Workflow saved = workflowRepository.save(workflow);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    @GetMapping("/templates")
    public ResponseEntity<?> getTemplates() {
        List<Workflow> templates = workflowRepository.findAll();
        return ResponseEntity.ok(templates);
    }
}
