# Practice Better MCP by usefulapi

Use [Practice Better](https://practicebetter.io) from Claude, Cursor, or any MCP client — read-only access to clients, sessions, booking slots, services, packages, invoices and form requests.
Hosted, no local install: connect with your own Practice Better credentials.

**Patient data:** do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs). See https://usefulapi.io/terms/#5-acceptable-use.

**Live endpoint:** `https://practice-better.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/practice-better

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://practice-better.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http practice-better https://practice-better.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=practice-better&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpractice-better.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "practice-better": {
      "url": "https://practice-better.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Practice Better credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/practice-better/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `practice_better_get_account` | read | Get my account |
| `practice_better_list_practitioners` | read | List practitioners |
| `practice_better_list_clients` | read | List clients |
| `practice_better_find_clients` | read | Find clients by name or email |
| `practice_better_get_client` | read | Get client |
| `practice_better_list_sessions` | read | List sessions (appointments) |
| `practice_better_get_session` | read | Get session |
| `practice_better_get_availability` | read | Get available time slots |
| `practice_better_list_services` | read | List services |
| `practice_better_list_packages` | read | List packages |
| `practice_better_list_tags` | read | List tags |
| `practice_better_list_invoices` | read | List invoices |
| `practice_better_get_invoice` | read | Get invoice |
| `practice_better_list_forms` | read | List forms |
| `practice_better_list_form_requests` | read | List form requests |
| `practice_better_usage_status` | meta | Usage status (free-tier meter) |
| `practice_better_request_feature` | meta | Request a missing feature |
| `practice_better_upgrade` | meta | Upgrade to Pro or Pro+ |
| `practice_better_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per practice) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per practice) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `practice_better_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `practice_better_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `practice_better_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Practice Better.
