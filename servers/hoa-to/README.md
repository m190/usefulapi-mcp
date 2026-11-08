# HOA.to MCP by usefulapi

Use your HOA.to account from Claude, Cursor, or any MCP client. Read the units, owners, requests, charges, payments, violations, documents and meetings of one HOA.to community, and write records with a write-scope key. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hoa-to.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hoa-to.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hoa-to https://hoa-to.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hoa-to&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhoa-to.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hoa-to": {
      "url": "https://hoa-to.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HOA.to credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hoa-to/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **HOA.to API key** (create it under **Integrations → API keys** in HOA.to; each key works for one community, and a `hoa_test_` key uses sandbox data). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hoato_ping` | read | Check the API key |
| `hoato_list_units` | read | List units |
| `hoato_get_unit` | read | Get a unit |
| `hoato_create_unit` | **write** | Create a unit |
| `hoato_update_unit` | **write** | Update a unit |
| `hoato_list_owners` | read | List owners and residents |
| `hoato_add_owner` | **write** | Attach an owner or resident |
| `hoato_update_owner` | **write** | Update or end an ownership |
| `hoato_list_requests` | read | List maintenance and ARC requests |
| `hoato_get_request` | read | Get a request |
| `hoato_create_request` | **write** | Create a request |
| `hoato_update_request` | **write** | Update a request |
| `hoato_list_charges` | read | List charges |
| `hoato_list_payments` | read | List payments |
| `hoato_record_payment` | **write** | Record a payment |
| `hoato_get_ledger` | read | Get a unit ledger |
| `hoato_list_violations` | read | List violations |
| `hoato_file_violation` | **write** | File a violation |
| `hoato_list_documents` | read | List documents |
| `hoato_publish_document` | **write** | Publish a document |
| `hoato_list_meetings` | read | List meetings and minutes |
| `hoato_get_meeting` | read | Get a meeting |
| `hoato_schedule_meeting` | **write** | Schedule a meeting |
| `hoato_list_announcements` | read | List announcements |
| `hoato_usage_status` | meta | Usage status (free-tier meter) |
| `hoato_request_feature` | meta | Request a missing feature |
| `hoato_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hoato_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hoato_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hoato_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hoato_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
