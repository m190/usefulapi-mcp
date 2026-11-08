# SignRequest MCP by usefulapi

Use your [SignRequest](https://signrequest.com) account from Claude, Cursor, or any MCP client. Read documents, signature requests, templates, teams and events, and send, cancel or resend signature requests. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://signrequest.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://signrequest.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http signrequest https://signrequest.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=signrequest&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsignrequest.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "signrequest": {
      "url": "https://signrequest.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SignRequest credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/signrequest/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SignRequest team API token** (SignRequest → Team settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `signrequest_list_documents` | read | List documents |
| `signrequest_get_document` | read | Get a document |
| `signrequest_search_documents` | read | Search documents |
| `signrequest_list_signrequests` | read | List signature requests |
| `signrequest_get_signrequest` | read | Get a signature request |
| `signrequest_list_templates` | read | List templates |
| `signrequest_get_template` | read | Get a template |
| `signrequest_list_teams` | read | List teams |
| `signrequest_get_team` | read | Get a team |
| `signrequest_list_team_members` | read | List team members |
| `signrequest_list_events` | read | List events |
| `signrequest_send_document` | **write** | Send a document for signature |
| `signrequest_cancel_signrequest` | **write** | Cancel a signature request |
| `signrequest_resend_signrequest_email` | **write** | Resend signature request e-mail |
| `signrequest_usage_status` | meta | Usage status (free-tier meter) |
| `signrequest_request_feature` | meta | Request a missing feature |
| `signrequest_upgrade` | meta | Upgrade to Pro or Pro+ |
| `signrequest_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `signrequest_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `signrequest_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `signrequest_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
