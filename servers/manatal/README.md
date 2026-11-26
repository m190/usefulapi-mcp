# Manatal MCP by usefulapi

Use your [Manatal](https://www.manatal.com) account from Claude, Cursor, or any MCP client. Read candidates, jobs, contacts and pipelines; add candidates and notes; move candidates between pipeline stages. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://manatal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://manatal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http manatal https://manatal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=manatal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmanatal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "manatal": {
      "url": "https://manatal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Manatal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/manatal/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Manatal Open API token** (Administration → Features → Open API; only admins can see it). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `manatal_list_candidates` | read | List candidates |
| `manatal_get_candidate` | read | Get a candidate |
| `manatal_list_candidate_notes` | read | List candidate notes |
| `manatal_list_jobs` | read | List jobs |
| `manatal_get_job` | read | Get a job |
| `manatal_list_job_matches` | read | List a job's pipeline |
| `manatal_list_contacts` | read | List contacts |
| `manatal_get_contact` | read | Get a contact |
| `manatal_list_matches` | read | List matches |
| `manatal_get_match` | read | Get a match |
| `manatal_list_match_stages` | read | List pipeline stages |
| `manatal_create_candidate` | **write** | Create a candidate |
| `manatal_add_candidate_note` | **write** | Add a candidate note |
| `manatal_add_candidate_to_job` | **write** | Add a candidate to a job |
| `manatal_move_match_stage` | **write** | Move a match to a pipeline stage |
| `manatal_usage_status` | meta | Usage status (free-tier meter) |
| `manatal_request_feature` | meta | Request a missing feature |
| `manatal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `manatal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `manatal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `manatal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `manatal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
