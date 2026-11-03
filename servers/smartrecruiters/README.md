# SmartRecruiters MCP by usefulapi

Use your [SmartRecruiters](https://www.smartrecruiters.com) account from Claude, Cursor, or any MCP client. Search jobs and candidates, read applications, add candidate tags, and read offers and users. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://smartrecruiters.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://smartrecruiters.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http smartrecruiters https://smartrecruiters.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=smartrecruiters&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsmartrecruiters.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "smartrecruiters": {
      "url": "https://smartrecruiters.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SmartRecruiters credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/smartrecruiters/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SmartRecruiters API key**, which an Administrator creates under Settings → Credential Manager → New Credential → API Key. The key is shown only once. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `smartrecruiters_search_jobs` | read | Search jobs |
| `smartrecruiters_get_job` | read | Get job |
| `smartrecruiters_search_candidates` | read | Search candidates |
| `smartrecruiters_get_candidate` | read | Get candidate |
| `smartrecruiters_get_candidate_application` | read | Get candidate application |
| `smartrecruiters_list_candidate_attachments` | read | List candidate attachments |
| `smartrecruiters_search_offers` | read | Search offers |
| `smartrecruiters_list_users` | read | List users |
| `smartrecruiters_add_candidate_tags` | **write** | Add candidate tags |
| `smartrecruiters_usage_status` | meta | Usage status (free-tier meter) |
| `smartrecruiters_request_feature` | meta | Request a missing feature |
| `smartrecruiters_upgrade` | meta | Upgrade to Pro or Pro+ |
| `smartrecruiters_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `smartrecruiters_upgrade` (it returns a Stripe Checkout link). Cancel any time with `smartrecruiters_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `smartrecruiters_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
