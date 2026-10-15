# =====================================================================
# Workflow Entity - JPA Model
# =====================================================================
package com.aiworkflowagent.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "workflows")
public class Workflow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String status;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String triggers;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String actions;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String conditions;

    @Column(name = "ai_config")
    private String aiConfig;

    @Column(name = "execution_count")
    private Integer executionCount = 0;

    @Column(name = "last_executed_at")
    private LocalDateTime lastExecutedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "workflow", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Execution> executions = new ArrayList<>();

    @OneToMany(mappedBy = "workflow", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Webhook> webhooks = new ArrayList<>();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getTriggers() { return triggers; }
    public void setTriggers(String triggers) { this.triggers = triggers; }
    public String getActions() { return actions; }
    public void setActions(String actions) { this.actions = actions; }
    public String getConditions() { return conditions; }
    public void setConditions(String conditions) { this.conditions = conditions; }
    public String getAiConfig() { return aiConfig; }
    public void setAiConfig(String aiConfig) { this.aiConfig = aiConfig; }
    public Integer getExecutionCount() { return executionCount; }
    public void setExecutionCount(Integer executionCount) { this.executionCount = executionCount; }
    public LocalDateTime getLastExecutedAt() { return lastExecutedAt; }
    public void setLastExecutedAt(LocalDateTime lastExecutedAt) { this.lastExecutedAt = lastExecutedAt; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public List<Execution> getExecutions() { return executions; }
    public void setExecutions(List<Execution> executions) { this.executions = executions; }
    public List<Webhook> getWebhooks() { return webhooks; }
    public void setWebhooks(List<Webhook> webhooks) { this.webhooks = webhooks; }
}
