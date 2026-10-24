# Hint Health MCP by usefulapi

Use [Hint Health](https://www.hint.com) from Claude, Cursor, or any MCP client — read-only access to patients, memberships, plans, coupons, charge items, invoices and payments (direct primary care).
Hosted, no local install: connect with your own Hint Health credentials.

**Patient data:** do not use this server with protected health information (PHI). We do not sign HIPAA Business Associate Agreements (BAAs). See https://usefulapi.io/terms/#5-acceptable-use.

**Live endpoint:** `https://hint-health.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/hint-health

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hint-health.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hint-health https://hint-health.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hint-health&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhint-health.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hint-health": {
      "url": "https://hint-health.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Hint Health credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hint-health/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hinthealth_get_practice` | read | Get practice |
| `hinthealth_list_locations` | read | List locations |
| `hinthealth_get_location` | read | Get location |
| `hinthealth_list_practitioners` | read | List practitioners |
| `hinthealth_get_practitioner` | read | Get practitioner |
| `hinthealth_list_patients` | read | List patients |
| `hinthealth_get_patient` | read | Get patient |
| `hinthealth_match_patients` | read | Find patients by name |
| `hinthealth_list_patient_credits` | read | List patient credits |
| `hinthealth_list_memberships` | read | List memberships |
| `hinthealth_get_membership` | read | Get membership |
| `hinthealth_list_plans` | read | List plans |
| `hinthealth_list_coupons` | read | List coupons |
| `hinthealth_list_charge_items` | read | List charge items |
| `hinthealth_list_invoices` | read | List invoices |
| `hinthealth_get_invoice` | read | Get invoice |
| `hinthealth_list_invoice_payments` | read | List invoice payments |
| `hinthealth_usage_status` | meta | Usage status (free-tier meter) |
| `hinthealth_request_feature` | meta | Request a missing feature |
| `hinthealth_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `hinthealth_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per practice) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `hinthealth_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hinthealth_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hinthealth_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Hint Health.
