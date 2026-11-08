# Keap MCP by usefulapi

**Live endpoint:** `https://keap.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://keap.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http keap https://keap.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=keap&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkeap.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "keap": {
      "url": "https://keap.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Keap credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/keap/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Keap API token** (Keap → Settings → API). It's
validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `keap_list_contacts` | read | List contacts |
| `keap_get_contact` | read | Get contact |
| `keap_list_companies` | read | List companies |
| `keap_get_company` | read | Get company |
| `keap_list_opportunities` | read | List opportunities |
| `keap_get_opportunity` | read | Get opportunity |
| `keap_list_tags` | read | List tags |
| `keap_list_tasks` | read | List tasks |
| `keap_get_task` | read | Get task |
| `keap_list_subscriptions` | read | List subscriptions |
| `keap_list_orders` | read | List orders |
| `keap_list_products` | read | List products |
| `keap_list_campaigns` | read | List campaigns |
| `keap_list_affiliates` | read | List affiliates |
| `keap_create_contact` | **write** | Create contact |
| `keap_update_contact` | **write** | Update contact |
| `keap_create_task` | **write** | Create task |
| `keap_apply_tag` | **write** | Apply tag to contacts |
| `keap_usage_status` | meta | Usage status (free-tier meter) |
| `keap_request_feature` | meta | Request a missing feature |
| `keap_upgrade` | meta | Upgrade to Pro or Pro+ |
| `keap_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `keap_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `keap_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `keap_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
