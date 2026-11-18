# CharityStack MCP by usefulapi

Use your [CharityStack](https://charitystack.com) account from Claude, Cursor, or any MCP client. Read payments, recurring subscriptions, donor contacts and donation forms, and change subscriptions and contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://charitystack.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://charitystack.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http charitystack https://charitystack.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=charitystack&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcharitystack.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "charitystack": {
      "url": "https://charitystack.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CharityStack credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/charitystack/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CharityStack live API key** (it starts with cs_live_), issued by your account administrator. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `charitystack_get_organization` | read | Get organization |
| `charitystack_list_payments` | read | List payments |
| `charitystack_get_payment` | read | Get payment |
| `charitystack_list_subscriptions` | read | List subscriptions |
| `charitystack_get_subscription` | read | Get subscription |
| `charitystack_update_subscription` | **write** | Cancel or change a subscription |
| `charitystack_list_contacts` | read | List contacts |
| `charitystack_get_contact` | read | Get contact |
| `charitystack_create_contact` | **write** | Create contact |
| `charitystack_update_contact` | **write** | Update contact |
| `charitystack_list_forms` | read | List forms |
| `charitystack_get_form` | read | Get form |
| `charitystack_usage_status` | meta | Usage status (free-tier meter) |
| `charitystack_request_feature` | meta | Request a missing feature |
| `charitystack_upgrade` | meta | Upgrade to Pro or Pro+ |
| `charitystack_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `charitystack_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `charitystack_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `charitystack_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
