# Traffit MCP by usefulapi

Use your [Traffit](https://traffit.com) account from Claude, Cursor, or any MCP client. Read candidates, jobs, pipeline stages, clients and contacts, and add notes to candidates. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://traffit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://traffit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http traffit https://traffit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=traffit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftraffit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "traffit": {
      "url": "https://traffit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Traffit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/traffit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your Traffit **account**, the **client id**, the **client secret** and the **scopes** (Traffit → Settings → Integration with the Traffit API → + Add client, tick the scopes, then Generate Client Secret). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `traffit_list_candidates` | read | List candidates |
| `traffit_get_candidate` | read | Get a candidate |
| `traffit_get_candidate_tags` | read | Get candidate tags |
| `traffit_get_candidate_jobs` | read | Get candidate jobs |
| `traffit_get_candidate_activities` | read | Get candidate activities |
| `traffit_get_candidate_files` | read | Get candidate files |
| `traffit_get_candidate_sources` | read | Get candidate sources |
| `traffit_list_jobs` | read | List jobs |
| `traffit_get_job` | read | Get a job |
| `traffit_list_job_candidates` | read | List candidates of a job |
| `traffit_list_job_states` | read | List job stages |
| `traffit_get_job_stage_counts` | read | Count candidates per stage |
| `traffit_list_stage_candidates` | read | List candidates in a job stage |
| `traffit_list_clients` | read | List clients |
| `traffit_get_client` | read | Get a client |
| `traffit_list_contacts` | read | List client contacts |
| `traffit_get_contact` | read | Get a client contact |
| `traffit_list_crm_activities` | read | List CRM activities |
| `traffit_list_users` | read | List users |
| `traffit_get_user` | read | Get a user |
| `traffit_list_talent_pools` | read | List talent pools |
| `traffit_list_sources` | read | List sources |
| `traffit_get_workflow` | read | Get a workflow |
| `traffit_add_candidate_note` | **write** | Add a note to a candidate |
| `traffit_usage_status` | meta | Usage status (free-tier meter) |
| `traffit_request_feature` | meta | Request a missing feature |
| `traffit_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `traffit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `traffit_upgrade` (it returns a Stripe Checkout link). Cancel any time with `traffit_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `traffit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
