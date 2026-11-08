# Octadesk MCP by usefulapi

Use your [Octadesk](https://www.octadesk.com) account from Claude, Cursor, or any MCP client. It searches tickets and people, reads ticket conversations, and creates and updates tickets and people. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://octadesk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://octadesk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http octadesk https://octadesk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=octadesk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foctadesk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "octadesk": {
      "url": "https://octadesk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Octadesk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/octadesk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Octadesk subdomain** (the `acme` part of `acme.octadesk.com`), your **Legacy API token** from Settings → API → Token API Octadesk (Legacy), and the **account e-mail** of the account that owns the token. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `octadesk_search_tickets` | read | Search tickets |
| `octadesk_get_ticket` | read | Get ticket |
| `octadesk_get_ticket_interactions` | read | Get ticket conversation |
| `octadesk_list_requester_tickets` | read | List tickets of a requester |
| `octadesk_list_custom_ticket_lists` | read | List custom ticket lists |
| `octadesk_find_person_by_email` | read | Find person by e-mail |
| `octadesk_get_person` | read | Get person |
| `octadesk_search_requesters` | read | Search requesters |
| `octadesk_search_agents` | read | Search agents |
| `octadesk_create_ticket` | **write** | Create ticket |
| `octadesk_update_ticket` | **write** | Update ticket |
| `octadesk_create_person` | **write** | Create person |
| `octadesk_update_person` | **write** | Update person |
| `octadesk_usage_status` | meta | Usage status (free-tier meter) |
| `octadesk_request_feature` | meta | Request a missing feature |
| `octadesk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `octadesk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `octadesk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `octadesk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `octadesk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
