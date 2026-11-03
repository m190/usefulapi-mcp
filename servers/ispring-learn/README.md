# iSpring Learn MCP by usefulapi

Use your [iSpring Learn](https://www.ispringsolutions.com/ispring-learn) account from Claude, Cursor, or any MCP client. Read users, groups, departments, roles, content items, course modules and enrollments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://ispring-learn.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ispring-learn.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ispring-learn https://ispring-learn.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ispring-learn&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fispring-learn.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ispring-learn": {
      "url": "https://ispring-learn.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your iSpring Learn credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ispring-learn/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Client ID** and a **Client Secret**, and your **data center** (iSpring Learn → Settings → Additional options → API keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ispringlearn_list_users` | read | List users |
| `ispringlearn_get_user` | read | Get user profile |
| `ispringlearn_list_user_profile_fields` | read | List user profile fields |
| `ispringlearn_list_roles` | read | List roles |
| `ispringlearn_list_groups` | read | List groups |
| `ispringlearn_get_group` | read | Get group |
| `ispringlearn_list_departments` | read | List departments |
| `ispringlearn_get_department` | read | Get department |
| `ispringlearn_list_content` | read | List content items |
| `ispringlearn_get_content_item` | read | Get content item |
| `ispringlearn_get_content_final_statuses` | read | Get content final statuses |
| `ispringlearn_list_course_modules` | read | List course modules |
| `ispringlearn_list_enrollments` | read | List enrollments |
| `ispringlearn_get_enrollment` | read | Get enrollment |
| `ispringlearn_usage_status` | meta | Usage status (free-tier meter) |
| `ispringlearn_request_feature` | meta | Request a missing feature |
| `ispringlearn_upgrade` | meta | Upgrade to Pro or Pro+ |
| `ispringlearn_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ispringlearn_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ispringlearn_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ispringlearn_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
