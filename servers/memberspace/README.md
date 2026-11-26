# MemberSpace MCP by usefulapi

Use your [MemberSpace](https://www.memberspace.com) account from Claude, Cursor, or any MCP client. Read plans, memberships, members, coupons and content views of a site (read-only). Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://memberspace.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://memberspace.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http memberspace https://memberspace.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=memberspace&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmemberspace.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "memberspace": {
      "url": "https://memberspace.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MemberSpace credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/memberspace/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **MemberSpace Admin API key** (starts with ms_admin_; create it under API keys in the MemberSpace admin backend). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `memberspace_list_sites` | read | List sites |
| `memberspace_list_plans` | read | List plans |
| `memberspace_get_plan` | read | Get a plan |
| `memberspace_list_memberships` | read | List memberships |
| `memberspace_list_members` | read | List members |
| `memberspace_list_member_events` | read | List member events |
| `memberspace_list_custom_fields` | read | List custom signup fields |
| `memberspace_list_coupons` | read | List coupons |
| `memberspace_list_coupon_redemptions` | read | List coupon redemptions |
| `memberspace_list_content_views` | read | List content views |
| `memberspace_usage_status` | meta | Usage status (free-tier meter) |
| `memberspace_request_feature` | meta | Request a missing feature |
| `memberspace_upgrade` | meta | Upgrade to Pro or Pro+ |
| `memberspace_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `memberspace_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `memberspace_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `memberspace_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
