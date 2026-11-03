# TalentLyft MCP by usefulapi

Use your [TalentLyft](https://talentlyft.com) account from Claude, Cursor, or any MCP client. Reads jobs, candidates, applications, stages and interview events, and adds candidate notes or moves applications to another stage. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://talentlyft.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://talentlyft.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http talentlyft https://talentlyft.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=talentlyft&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftalentlyft.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "talentlyft": {
      "url": "https://talentlyft.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your TalentLyft credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/talentlyft/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **TalentLyft Access token** (profile icon → Integrations → TalentLyft Access token settings). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `talentlyft_list_jobs` | read | List jobs |
| `talentlyft_get_job` | read | Get a job |
| `talentlyft_list_job_stages` | read | List job stages |
| `talentlyft_list_candidates` | read | List candidates |
| `talentlyft_get_candidate` | read | Get a candidate |
| `talentlyft_list_candidate_activities` | read | List candidate activities |
| `talentlyft_get_application` | read | Get a candidate application |
| `talentlyft_list_pipelines` | read | List pipelines |
| `talentlyft_list_departments` | read | List departments |
| `talentlyft_list_members` | read | List members |
| `talentlyft_list_rejection_reasons` | read | List rejection reasons |
| `talentlyft_list_events` | read | List events |
| `talentlyft_add_candidate_note` | **write** | Add a note to a candidate |
| `talentlyft_move_application_to_stage` | **write** | Move an application to a stage |
| `talentlyft_usage_status` | meta | Usage status (free-tier meter) |
| `talentlyft_request_feature` | meta | Request a missing feature |
| `talentlyft_upgrade` | meta | Upgrade to Pro or Pro+ |
| `talentlyft_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `talentlyft_upgrade` (it returns a Stripe Checkout link). Cancel any time with `talentlyft_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `talentlyft_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
