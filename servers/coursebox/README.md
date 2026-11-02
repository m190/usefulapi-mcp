# Coursebox MCP by usefulapi

Use your [Coursebox](https://www.coursebox.ai) account from Claude, Cursor, or any MCP client. Create and edit courses, sections and lessons, fill lessons with Coursebox's AI, and publish or unpublish courses. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://coursebox.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://coursebox.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http coursebox https://coursebox.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=coursebox&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcoursebox.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "coursebox": {
      "url": "https://coursebox.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Coursebox credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/coursebox/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Coursebox portal** name (`myportal` from `myportal.coursebox.ai`) and your **Coursebox Open API key**, found under **Settings → Integrations → Open API**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `coursebox_get_course_structure` | read | Get course structure |
| `coursebox_create_course` | **write** | Create course |
| `coursebox_update_course` | **write** | Update course details |
| `coursebox_create_section` | **write** | Create section |
| `coursebox_rename_section` | **write** | Rename section |
| `coursebox_delete_section` | **write** | Delete section |
| `coursebox_create_lesson` | **write** | Create lesson |
| `coursebox_move_lesson` | **write** | Move lesson |
| `coursebox_delete_lesson` | **write** | Delete lesson |
| `coursebox_edit_lesson_with_ai` | **write** | Edit lesson with AI |
| `coursebox_publish_course` | **write** | Publish course |
| `coursebox_unpublish_course` | **write** | Unpublish course |
| `coursebox_usage_status` | meta | Usage status (free-tier meter) |
| `coursebox_request_feature` | meta | Request a missing feature |
| `coursebox_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `coursebox_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `coursebox_upgrade` (it returns a Stripe Checkout link). Cancel any time with `coursebox_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `coursebox_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
