# Drupal MCP by usefulapi

Read and write Drupal JSON:API nodes, taxonomy terms, users and files. Hosted, no local install.

**Live endpoint:** `https://drupal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://drupal.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http drupal https://drupal.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=drupal&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdrupal.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "drupal": {
      "url": "https://drupal.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Drupal credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/drupal/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Drupal credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `drupal_list_resource_types` | read | List resource types |
| `drupal_list_resources` | read | List resources |
| `drupal_get_resource` | read | Get resource |
| `drupal_search_content` | read | Search content |
| `drupal_create_resource` | **write** | Create resource |
| `drupal_update_resource` | **write** | Update resource |
| `drupal_delete_resource` | **write** | Delete resource |
| `drupal_usage_status` | meta | Usage status (free-tier meter) |
| `drupal_request_feature` | meta | Request a missing feature |
| `drupal_upgrade` | meta | Upgrade to Pro or Pro+ |
| `drupal_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `drupal_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `drupal_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `drupal_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
