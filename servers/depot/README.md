# Depot MCP by usefulapi

Use [Depot](https://depot.dev) from Claude, Cursor, or any MCP client — inspect projects, container builds, build steps and logs, Depot CI runs and jobs, and GitHub Actions runner usage, and retry or cancel CI work.
Hosted, no local install: connect with your own Depot credentials.

**Live endpoint:** `https://depot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/depot

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://depot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http depot https://depot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=depot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdepot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "depot": {
      "url": "https://depot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Depot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/depot/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Depot organization API token** (Organization Settings → API Tokens).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `depot_list_projects` | read | List projects |
| `depot_get_project` | read | Get a project |
| `depot_list_builds` | read | List builds for a project |
| `depot_get_build` | read | Get a build |
| `depot_get_build_steps` | read | List a build's steps |
| `depot_get_build_step_logs` | read | Get a build step's logs |
| `depot_list_registry_images` | read | List registry images |
| `depot_get_usage` | read | Get organization usage |
| `depot_ci_list_runs` | read | List Depot CI runs |
| `depot_ci_get_run_status` | read | Get a CI run's status tree |
| `depot_ci_list_workflows` | read | List Depot CI workflows |
| `depot_ci_get_job` | read | Get a CI job |
| `depot_ci_get_job_logs` | read | Get a CI job's logs |
| `depot_ci_get_failure_diagnosis` | read | Diagnose a CI failure |
| `depot_gha_list_jobs` | read | List GitHub Actions jobs on Depot runners |
| `depot_gha_search_logs` | read | Search GitHub Actions logs |
| `depot_gha_get_analytics` | read | Get GitHub Actions analytics |
| `depot_gha_list_recommendations` | read | List runner-size recommendations |
| `depot_cache_list_entries` | read | List cache entries |
| `depot_cache_delete_entries` | **write** | Delete cache entries |
| `depot_create_project` | **write** | Create a project |
| `depot_ci_retry_job` | **write** | Retry a CI job |
| `depot_ci_retry_failed_jobs` | **write** | Retry a workflow's failed jobs |
| `depot_ci_cancel_run` | **write** | Cancel a CI run |
| `depot_usage_status` | meta | Usage status (free-tier meter) |
| `depot_request_feature` | meta | Request a missing feature |
| `depot_upgrade` | meta | Upgrade to Pro or Pro+ |
| `depot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `depot_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `depot_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `depot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Depot.
