# Oases MCP by usefulapi

Use your [Oases](https://oasesonline.com) account from Claude, Cursor, or any MCP client. It reads student, parent, staff, session, invoice and payment records, and it adds notes and updates single student or parent fields. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://oases.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oases.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oases https://oases.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oases&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foases.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oases": {
      "url": "https://oases.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Oases credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oases/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Oases API key**. Oases issues it on request: submit a support ticket on the Oases help centre and ask for your API access code. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oases_get_student` | read | Get a student |
| `oases_get_parent` | read | Get a parent |
| `oases_get_staff` | read | Get a staff member |
| `oases_get_session` | read | Get a session |
| `oases_get_invoice` | read | Get an invoice |
| `oases_get_payment` | read | Get a payment |
| `oases_get_notes` | read | Get notes |
| `oases_get_list` | read | Get a reference list |
| `oases_create_note` | **write** | Create a note |
| `oases_update_student` | **write** | Update a student field |
| `oases_update_parent` | **write** | Update a parent field |
| `oases_usage_status` | meta | Usage status (free-tier meter) |
| `oases_request_feature` | meta | Request a missing feature |
| `oases_upgrade` | meta | Upgrade to Pro or Pro+ |
| `oases_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `oases_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `oases_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `oases_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
