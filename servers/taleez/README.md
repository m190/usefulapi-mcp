# Taleez MCP by usefulapi

Connect your scoped Taleez API key to an AI assistant.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://taleez.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http taleez https://taleez.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=taleez&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftaleez.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "taleez": {
      "url": "https://taleez.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Taleez credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/taleez/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `taleez_list_jobs` | read | List jobs |
| `taleez_get_job` | read | Get job |
| `taleez_get_job_steps` | read | Get job pipeline steps |
| `taleez_get_job_statuses` | read | Get job status history |
| `taleez_get_job_questions` | read | Get job application questions |
| `taleez_get_job_filters` | read | Count jobs by filter |
| `taleez_list_job_properties` | read | List job properties |
| `taleez_list_candidates` | read | List candidates |
| `taleez_get_candidate` | read | Get candidate |
| `taleez_get_candidate_applications` | read | Get candidate applications |
| `taleez_get_candidate_properties` | read | Get candidate properties |
| `taleez_get_candidate_pools` | read | Get candidate pools |
| `taleez_get_candidate_documents` | read | Get candidate documents |
| `taleez_get_candidate_events` | read | Get candidate events |
| `taleez_list_candidate_properties` | read | List candidate properties |
| `taleez_list_pools` | read | List talent pools |
| `taleez_list_pool_candidates` | read | List pool candidates |
| `taleez_list_recruiters` | read | List recruiters |
| `taleez_list_units` | read | List units |
| `taleez_list_events` | read | List events |
| `taleez_create_candidate` | **write** | Create candidate |
| `taleez_update_candidate` | **write** | Update candidate |
| `taleez_set_candidate_properties` | **write** | Set candidate properties |
| `taleez_add_candidates_to_pool` | **write** | Add candidates to a pool |
| `taleez_add_candidates_to_job` | **write** | Add candidates to a job |
| `taleez_usage_status` | meta | Usage status (free-tier meter) |
| `taleez_request_feature` | meta | Request a missing feature |
| `taleez_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `taleez_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per secret API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `taleez_upgrade` (it returns a Stripe Checkout link). Cancel any time with `taleez_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `taleez_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
