# UserVoice MCP by usefulapi

Use [UserVoice](https://www.uservoice.com) from Claude, Cursor, or any MCP client — forums, suggestions, comments, notes, status updates, supporters, feedback records, features and users.
Hosted, no local install: connect with your own UserVoice credentials.

**Live endpoint:** `https://uservoice.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/uservoice

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://uservoice.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http uservoice https://uservoice.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=uservoice&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fuservoice.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "uservoice": {
      "url": "https://uservoice.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UserVoice credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/uservoice/

<!-- connect:end (generated above, edit below) -->

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UserVoice credentials.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `uservoice_get_account` | read | Get account |
| `uservoice_list_forums` | read | List forums |
| `uservoice_list_categories` | read | List categories |
| `uservoice_list_statuses` | read | List statuses |
| `uservoice_list_labels` | read | List labels |
| `uservoice_list_suggestions` | read | List suggestions |
| `uservoice_get_suggestion` | read | Get suggestion |
| `uservoice_list_comments` | read | List comments |
| `uservoice_list_notes` | read | List internal notes |
| `uservoice_list_status_updates` | read | List status updates |
| `uservoice_list_supporters` | read | List supporters |
| `uservoice_list_feedback_records` | read | List feedback records |
| `uservoice_list_features` | read | List features |
| `uservoice_list_users` | read | List users |
| `uservoice_get_user` | read | Get user |
| `uservoice_create_suggestion` | **write** | Create suggestion |
| `uservoice_add_comment` | **write** | Add public comment |
| `uservoice_add_note` | **write** | Add internal note |
| `uservoice_post_status_update` | **write** | Post status update |
| `uservoice_add_feedback` | **write** | Capture feedback |
| `uservoice_attach_label` | **write** | Attach label |
| `uservoice_usage_status` | meta | Usage status (free-tier meter) |
| `uservoice_request_feature` | meta | Request a missing feature |
| `uservoice_upgrade` | meta | Upgrade to Pro (unlimited) |
| `uservoice_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `uservoice_upgrade` (it returns a Stripe Checkout link). Cancel any time with `uservoice_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `uservoice_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by UserVoice.
