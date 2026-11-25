# Semaphore CI MCP by usefulapi

Use your [Semaphore CI](https://semaphore.io) account from Claude, Cursor, or any MCP client. Read pipelines, workflows, job logs, agents and deployments, and rebuild, stop or terminate runs. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://semaphore-ci.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://semaphore-ci.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http semaphore-ci https://semaphore-ci.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=semaphore-ci&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsemaphore-ci.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "semaphore-ci": {
      "url": "https://semaphore-ci.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Semaphore CI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/semaphore-ci/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **organization name** (the `acme` part of acme.semaphoreci.com) and a **personal API token** (Semaphore → Account settings → API token). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `semaphore_get_pipeline` | read | Get a pipeline |
| `semaphore_list_pipelines` | read | List pipelines |
| `semaphore_list_plumber_workflows` | read | List workflows |
| `semaphore_get_plumber_workflow` | read | Get a workflow |
| `semaphore_list_promotions` | read | List promotions |
| `semaphore_get_job` | read | Get a job |
| `semaphore_get_job_logs` | read | Get job logs |
| `semaphore_list_agents` | read | List agents |
| `semaphore_get_agent` | read | Get an agent |
| `semaphore_list_self_hosted_agent_types` | read | List self-hosted agent types |
| `semaphore_get_self_hosted_agent_type` | read | Get a self-hosted agent type |
| `semaphore_list_members` | read | List organization members |
| `semaphore_list_project_members` | read | List project members |
| `semaphore_list_roles` | read | List roles |
| `semaphore_get_role` | read | Get a role |
| `semaphore_list_permissions` | read | List permissions |
| `semaphore_list_groups` | read | List groups |
| `semaphore_list_service_accounts` | read | List service accounts |
| `semaphore_list_deployment_targets` | read | List deployment targets |
| `semaphore_get_deployment_target` | read | Get a deployment target |
| `semaphore_get_deployment_target_history` | read | Get deployment history |
| `semaphore_get_pre_flight_checks` | read | Get pre-flight checks |
| `semaphore_list_artifacts` | read | List artifacts |
| `semaphore_list_flaky_tests` | read | List flaky tests |
| `semaphore_get_flaky_test` | read | Get a flaky test |
| `semaphore_get_performance_insights` | read | Get pipeline performance |
| `semaphore_get_reliability_insights` | read | Get pipeline reliability |
| `semaphore_get_frequency_insights` | read | Get pipeline frequency |
| `semaphore_partial_rebuild_pipeline` | **write** | Rebuild failed pipeline jobs |
| `semaphore_stop_job` | **write** | Stop a job |
| `semaphore_terminate_workflow` | **write** | Terminate a workflow |
| `semaphore_usage_status` | meta | Usage status (free-tier meter) |
| `semaphore_request_feature` | meta | Request a missing feature |
| `semaphore_upgrade` | meta | Upgrade to Pro or Pro+ |
| `semaphore_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `semaphore_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `semaphore_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `semaphore_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
