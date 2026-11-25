# Omise MCP by usefulapi

Use your [Omise](https://www.omise.co) account from Claude, Cursor, or any MCP client. Read charges, refunds, customers, disputes, balance and events, capture authorized charges, and create refunds. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://omise.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://omise.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http omise https://omise.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=omise&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fomise.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "omise": {
      "url": "https://omise.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Omise credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/omise/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Omise secret key** (`skey_test_…` or `skey_live_…`), found in the Omise Dashboard under Settings → Keys. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `omise_get_account` | read | Get the account |
| `omise_get_balance` | read | Get the balance |
| `omise_list_charges` | read | List charges |
| `omise_get_charge` | read | Get a charge |
| `omise_list_refunds` | read | List refunds |
| `omise_list_charge_refunds` | read | List refunds of a charge |
| `omise_get_refund` | read | Get a refund |
| `omise_list_customers` | read | List customers |
| `omise_get_customer` | read | Get a customer |
| `omise_list_customer_cards` | read | List a customer's cards |
| `omise_list_disputes` | read | List disputes |
| `omise_get_dispute` | read | Get a dispute |
| `omise_list_events` | read | List events |
| `omise_get_event` | read | Get an event |
| `omise_create_customer` | **write** | Create a customer |
| `omise_update_customer` | **write** | Update a customer |
| `omise_update_charge` | **write** | Update a charge |
| `omise_capture_charge` | **write** | Capture a charge |
| `omise_create_refund` | **write** | Create a refund |
| `omise_usage_status` | meta | Usage status (free-tier meter) |
| `omise_request_feature` | meta | Request a missing feature |
| `omise_upgrade` | meta | Upgrade to Pro or Pro+ |
| `omise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `omise_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `omise_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `omise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
