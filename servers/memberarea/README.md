# MemberArea MCP by usefulapi

Use your [MemberArea](https://memberarea.io) account from Claude, Cursor, or any MCP client. Read members, courses, orders and subscriptions, and create members or enroll them in courses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://memberarea.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://memberarea.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http memberarea https://memberarea.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=memberarea&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmemberarea.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "memberarea": {
      "url": "https://memberarea.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MemberArea credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/memberarea/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **MemberArea API key** (starts with mak_; create it under Settings → API in the MemberArea admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `memberarea_get_account` | read | Get API key context |
| `memberarea_list_members` | read | List members |
| `memberarea_get_member` | read | Get a member |
| `memberarea_find_member_by_email` | read | Find a member by email |
| `memberarea_list_member_courses` | read | List a member's courses |
| `memberarea_list_courses` | read | List courses |
| `memberarea_get_course` | read | Get a course |
| `memberarea_list_course_members` | read | List members enrolled in a course |
| `memberarea_list_tags` | read | List tags |
| `memberarea_list_products` | read | List products |
| `memberarea_list_orders` | read | List orders |
| `memberarea_get_order` | read | Get an order |
| `memberarea_list_subscriptions` | read | List subscriptions |
| `memberarea_list_events` | read | List events |
| `memberarea_create_member` | **write** | Create a member |
| `memberarea_update_member` | **write** | Update a member |
| `memberarea_attach_tag` | **write** | Attach a tag to a member |
| `memberarea_enroll_member` | **write** | Enroll a member in a course |
| `memberarea_usage_status` | meta | Usage status (free-tier meter) |
| `memberarea_request_feature` | meta | Request a missing feature |
| `memberarea_upgrade` | meta | Upgrade to Pro or Pro+ |
| `memberarea_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `memberarea_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `memberarea_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `memberarea_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
