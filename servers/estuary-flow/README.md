# Estuary Flow MCP by usefulapi

Inspect Estuary Flow captures, materializations, collections and stats. Hosted, no local install.

**Live endpoint:** `https://estuary-flow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://estuary-flow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http estuary-flow https://estuary-flow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=estuary-flow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Festuary-flow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "estuary-flow": {
      "url": "https://estuary-flow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Estuary Flow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/estuary-flow/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Estuary Flow credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `estuary_list_catalog` | read | List catalog entities |
| `estuary_get_catalog_spec` | read | Get catalog spec |
| `estuary_get_catalog_stats` | read | Get catalog stats |
| `estuary_list_connectors` | read | List connectors |
| `estuary_list_connector_versions` | read | List connector versions |
| `estuary_list_drafts` | read | List drafts |
| `estuary_list_draft_specs` | read | List draft specs |
| `estuary_list_publications` | read | List publications |
| `estuary_list_discovers` | read | List discovers |
| `estuary_list_roles` | read | List roles |
| `estuary_get_tenant` | read | Get tenant |
| `estuary_view_task_logs` | read | View task logs |
| `estuary_create_draft` | **write** | Create draft |
| `estuary_upsert_draft_spec` | **write** | Upsert draft spec |
| `estuary_publish_draft` | **write** | Publish draft |
| `estuary_flow_usage_status` | meta | Usage status (free-tier meter) |
| `estuary_flow_request_feature` | meta | Request a missing feature |
| `estuary_flow_upgrade` | meta | Upgrade to Pro (unlimited) |
| `estuary_flow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `estuary_flow_upgrade` (it returns a Stripe Checkout link). Cancel any time with `estuary_flow_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `estuary_flow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
