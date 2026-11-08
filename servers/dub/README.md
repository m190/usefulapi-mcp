# Dub MCP by usefulapi

Short links with click, lead and sale analytics, customers, tags and the partner programme. Hosted, no local install.

**Live endpoint:** `https://dub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://dub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http dub https://dub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=dub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "dub": {
      "url": "https://dub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Dub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/dub/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Dub credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dub_list_links` | read | List short links |
| `dub_get_link` | read | Get one short link |
| `dub_count_links` | read | Count short links |
| `dub_get_analytics` | read | Get analytics |
| `dub_list_events` | read | List raw events |
| `dub_list_customers` | read | List customers |
| `dub_get_customer` | read | Get one customer |
| `dub_list_tags` | read | List tags |
| `dub_list_folders` | read | List folders |
| `dub_list_domains` | read | List domains |
| `dub_list_partners` | read | List partners |
| `dub_get_partner_analytics` | read | Get partner analytics |
| `dub_list_partner_applications` | read | List partner applications |
| `dub_list_commissions` | read | List commissions |
| `dub_list_payouts` | read | List payouts |
| `dub_create_link` | **write** | Create a short link |
| `dub_update_link` | **write** | Update a short link |
| `dub_delete_link` | **write** | Delete a short link |
| `dub_create_tag` | **write** | Create a tag |
| `dub_create_folder` | **write** | Create a folder |
| `dub_approve_partner_application` | **write** | Approve a partner application |
| `dub_reject_partner_application` | **write** | Reject a partner application |
| `dub_usage_status` | meta | Usage status (free-tier meter) |
| `dub_request_feature` | meta | Request a missing feature |
| `dub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `dub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `dub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `dub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `dub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
