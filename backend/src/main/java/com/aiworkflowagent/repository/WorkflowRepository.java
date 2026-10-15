# =====================================================================
# Workflow Repository - JPA Repository Interface
# =====================================================================
package com.aiworkflowagent.repository;

import com.aiworkflowagent.model.Workflow;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WorkflowRepository extends JpaRepository<Workflow, Long> {
    List<Workflow> findByUserId(Long userId);
    List<Workflow> findByUserIdAndStatus(Long userId, String status);
}
