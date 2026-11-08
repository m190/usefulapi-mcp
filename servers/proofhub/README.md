# ProofHub MCP by usefulapi

Use your [ProofHub](https://www.proofhub.com) account from Claude, Cursor, or any MCP client. Read projects, to-do lists, tasks, comments, people and time entries, and create tasks, post comments or mark tasks complete. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://proofhub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://proofhub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http proofhub https://proofhub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=proofhub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fproofhub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "proofhub": {
      "url": "https://proofhub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ProofHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/proofhub/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ProofHub company** (the part before .proofhub.com in your address) and your **ProofHub API key** (profile menu → API access). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `proofhub_list_projects` | read | List projects |
| `proofhub_get_project` | read | Get project |
| `proofhub_list_todolists` | read | List to-do lists |
| `proofhub_list_tasks` | read | List tasks in a to-do list |
| `proofhub_get_task` | read | Get task |
| `proofhub_list_task_comments` | read | List task comments |
| `proofhub_search_all_tasks` | read | Search tasks across projects |
| `proofhub_list_topics` | read | List discussion topics |
| `proofhub_list_labels` | read | List labels |
| `proofhub_list_people` | read | List people |
| `proofhub_get_person` | read | Get person |
| `proofhub_list_time_entries` | read | List time entries |
| `proofhub_create_task` | **write** | Create task |
| `proofhub_set_task_completed` | **write** | Mark task complete or open |
| `proofhub_add_task_comment` | **write** | Add task comment |
| `proofhub_usage_status` | meta | Usage status (free-tier meter) |
| `proofhub_request_feature` | meta | Request a missing feature |
| `proofhub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `proofhub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `proofhub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `proofhub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `proofhub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
