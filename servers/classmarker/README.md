# ClassMarker MCP by usefulapi

Use [ClassMarker](https://www.classmarker.com) from Claude, Cursor, or any MCP client — groups, links, exams, recent results, categories and the question bank, plus access codes.
Hosted, no local install: connect with your own ClassMarker credentials.

**Live endpoint:** `https://classmarker.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/classmarker

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://classmarker.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http classmarker https://classmarker.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=classmarker&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fclassmarker.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "classmarker": {
      "url": "https://classmarker.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ClassMarker credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/classmarker/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `classmarker_list_groups_links_exams` | read | List groups, links and exams |
| `classmarker_recent_group_results` | read | Recent results across all groups |
| `classmarker_recent_link_results` | read | Recent results across all links |
| `classmarker_recent_group_exam_results` | read | Recent results for one group exam |
| `classmarker_recent_link_exam_results` | read | Recent results for one link exam |
| `classmarker_list_categories` | read | List question categories |
| `classmarker_list_questions` | read | List question-bank questions |
| `classmarker_get_question` | read | Get a question |
| `classmarker_add_access_codes` | **write** | Add access codes to a list |
| `classmarker_create_parent_category` | **write** | Create a parent category |
| `classmarker_update_parent_category` | **write** | Rename a parent category |
| `classmarker_create_category` | **write** | Create a category |
| `classmarker_update_category` | **write** | Update a category |
| `classmarker_create_question` | **write** | Create a question |
| `classmarker_update_question` | **write** | Update a question |
| `classmarker_usage_status` | meta | Usage status (free-tier meter) |
| `classmarker_request_feature` | meta | Request a missing feature |
| `classmarker_upgrade` | meta | Upgrade: 7-day pass or Pro (unlimited) |
| `classmarker_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `classmarker_upgrade` (it returns a Stripe Checkout link). Cancel any time with `classmarker_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `classmarker_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by ClassMarker.
