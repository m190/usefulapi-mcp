# Enboarder MCP by usefulapi

Use your [Enboarder](https://enboarder.com) account from Claude, Cursor, or any MCP client. Read workflows, forms, brands, locations and custom fields, and launch, update or cancel workflows. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://enboarder.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://enboarder.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http enboarder https://enboarder.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=enboarder&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fenboarder.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "enboarder": {
      "url": "https://enboarder.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Enboarder credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/enboarder/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Enboarder API key** and your **data region** (Enboarder → Settings → Integration → Extensions). An admin must switch the REST API on. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `enboarder_list_workflows` | read | List workflows |
| `enboarder_get_workflow_properties` | read | Get workflow properties |
| `enboarder_get_workflow_data` | read | Get workflow data |
| `enboarder_get_workflow_data_by_id` | read | Get data for one workflow |
| `enboarder_list_forms` | read | List forms |
| `enboarder_get_form_properties` | read | Get form properties |
| `enboarder_get_form_data` | read | Get form submissions |
| `enboarder_get_profile` | read | Get profile |
| `enboarder_list_brands` | read | List brands |
| `enboarder_list_locations` | read | List locations |
| `enboarder_list_categories` | read | List categories |
| `enboarder_list_custom_fields` | read | List custom fields |
| `enboarder_launch_workflow` | **write** | Launch a workflow (basic) |
| `enboarder_update_workflow` | **write** | Update a running workflow |
| `enboarder_cancel_workflow` | **write** | Cancel a workflow |
| `enboarder_usage_status` | meta | Usage status (free-tier meter) |
| `enboarder_request_feature` | meta | Request a missing feature |
| `enboarder_upgrade` | meta | Upgrade to Pro or Pro+ |
| `enboarder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `enboarder_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `enboarder_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `enboarder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
