# LingoHub MCP by usefulapi

Connect your API-enabled LingoHub account.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lingohub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lingohub https://lingohub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lingohub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flingohub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lingohub": {
      "url": "https://lingohub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your LingoHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lingohub/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lingohub_list_projects` | read | List projects |
| `lingohub_get_project` | read | Get project |
| `lingohub_get_project_status` | read | Get project file status |
| `lingohub_get_workspace_status` | read | Get workspace translation status |
| `lingohub_create_project` | **write** | Create project |
| `lingohub_list_resources` | read | List resource files |
| `lingohub_download_resource` | read | Download resource file |
| `lingohub_upload_resource_file` | **write** | Upload resource file |
| `lingohub_delete_resource` | **write** | Delete resource file |
| `lingohub_request_export` | **write** | Request export |
| `lingohub_get_export` | read | Get export status |
| `lingohub_list_context_images` | read | List context images |
| `lingohub_delete_context_image` | **write** | Delete context image |
| `lingohub_push_to_repository` | **write** | Push translations to repository |
| `lingohub_usage_status` | meta | Usage status (free-tier meter) |
| `lingohub_request_feature` | meta | Request a missing feature |
| `lingohub_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `lingohub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `lingohub_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lingohub_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lingohub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
