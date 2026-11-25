# Breezy HR MCP by usefulapi

Use your [Breezy HR](https://breezy.hr) account from Claude, Cursor, or any MCP client. Read positions, candidates, pipelines, activity and hiring reports, and move candidates, add internal notes or change position states. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://breezy-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://breezy-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http breezy-hr https://breezy-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=breezy-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbreezy-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "breezy-hr": {
      "url": "https://breezy-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Breezy HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/breezy-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Breezy Personal Access Token** (prefix breezy_pat_, from My Settings → API Keys in Breezy). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `breezy_get_current_user` | read | Get the current user |
| `breezy_list_companies` | read | List companies |
| `breezy_list_pipelines` | read | List hiring pipelines |
| `breezy_get_pipeline_stages` | read | Get pipeline stages |
| `breezy_list_positions` | read | List positions |
| `breezy_get_position` | read | Get a position |
| `breezy_get_position_summary` | read | Get position summary |
| `breezy_set_position_state` | **write** | Change position state |
| `breezy_list_candidates` | read | List candidates on a position |
| `breezy_get_candidate` | read | Get a candidate |
| `breezy_get_candidate_activity` | read | Get candidate activity |
| `breezy_get_candidate_conversation` | read | Get candidate messages |
| `breezy_search_candidates` | read | Search candidates |
| `breezy_set_candidate_stage` | **write** | Move a candidate to a stage |
| `breezy_add_candidate_note` | **write** | Add an internal note |
| `breezy_get_report` | read | Get a hiring report |
| `breezy_list_tasks` | read | List tasks |
| `breezy_usage_status` | meta | Usage status (free-tier meter) |
| `breezy_request_feature` | meta | Request a missing feature |
| `breezy_upgrade` | meta | Upgrade to Pro or Pro+ |
| `breezy_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `breezy_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `breezy_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `breezy_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
