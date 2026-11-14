# ROLLER MCP by usefulapi

Use your [ROLLER](https://www.roller.software) account from Claude, Cursor, or any MCP client. Read bookings, products, availability, guests, waivers and payment reports. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://roller.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://roller.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http roller https://roller.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=roller&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Froller.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "roller": {
      "url": "https://roller.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ROLLER credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/roller/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **API client ID** and **API client secret**, created in ROLLER Venue Manager under **Settings → Integrations → API keys → Create client key**, and choose **Live** or **Playground** as the **Environment**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `roller_get_venue` | read | Get venue |
| `roller_search_bookings` | read | Search bookings |
| `roller_get_booking` | read | Get booking |
| `roller_get_booking_form_responses` | read | Get booking form responses |
| `roller_get_company` | read | Get company |
| `roller_list_products` | read | List products |
| `roller_get_product_availability` | read | Get product availability |
| `roller_get_product_availability_calendar` | read | Get product availability calendar |
| `roller_get_price_rules` | read | Get price rules |
| `roller_list_segments` | read | List guest segments |
| `roller_get_guest` | read | Get guest |
| `roller_get_guest_multi_passes` | read | Get guest multi-passes |
| `roller_get_signed_waiver` | read | Get signed waiver |
| `roller_get_signed_waiver_form_responses` | read | Get signed waiver form responses |
| `roller_get_discount` | read | Get discount |
| `roller_list_modifier_groups` | read | List modifier groups |
| `roller_get_modifier_group` | read | Get modifier group |
| `roller_get_gift_card_balance` | read | Get gift card balance |
| `roller_report_bookings` | read | Report bookings |
| `roller_report_tickets` | read | Report tickets |
| `roller_report_gift_cards` | read | Report gift cards |
| `roller_report_guests` | read | Report guests |
| `roller_report_attendance` | read | Report attendance |
| `roller_report_signed_waivers` | read | Report signed waivers |
| `roller_report_booking_signed_waivers` | read | Report booking signed waivers |
| `roller_report_payments` | read | Report payments |
| `roller_report_revenue_entries` | read | Report revenue entries |
| `roller_report_gx_scores` | read | Report guest experience scores |
| `roller_report_till_reconciliations` | read | Report till reconciliations |
| `roller_report_membership_redemptions` | read | Report membership redemptions |
| `roller_report_membership_statuses` | read | Report membership statuses |
| `roller_report_membership_credits` | read | Report membership credits |
| `roller_report_guest_segment_members` | read | Report guest segment members |
| `roller_report_products` | read | Report products |
| `roller_report_modifiers` | read | Report modifiers |
| `roller_report_discounts` | read | Report discounts |
| `roller_report_resources` | read | Report resources |
| `roller_report_devices` | read | Report devices |
| `roller_report_staff` | read | Report staff |
| `roller_report_roles` | read | Report roles |
| `roller_report_waivers` | read | Report waivers |
| `roller_report_reporting_categories` | read | Report reporting categories |
| `roller_usage_status` | meta | Usage status (free-tier meter) |
| `roller_request_feature` | meta | Request a missing feature |
| `roller_upgrade` | meta | Upgrade to Pro or Pro+ |
| `roller_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `roller_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `roller_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `roller_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
