# UpCloud MCP by usefulapi

Use [UpCloud](https://upcloud.com) from Claude, Cursor, or any MCP client — inspect servers, storage, networks, firewall rules, databases, Kubernetes, billing and the audit log, and start, stop, restart or back up servers.
Hosted, no local install: connect with your own UpCloud credentials.

**Live endpoint:** `https://upcloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/upcloud

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://upcloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http upcloud https://upcloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=upcloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fupcloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "upcloud": {
      "url": "https://upcloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your UpCloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/upcloud/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **UpCloud API token** (Control Panel → Account → API tokens).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `upcloud_get_account` | read | Get account |
| `upcloud_list_zones` | read | List zones |
| `upcloud_list_plans` | read | List server plans |
| `upcloud_list_prices` | read | List prices |
| `upcloud_get_billing_summary` | read | Get monthly billing summary |
| `upcloud_list_servers` | read | List servers |
| `upcloud_get_server` | read | Get server details |
| `upcloud_list_storages` | read | List storages |
| `upcloud_get_storage` | read | Get storage details |
| `upcloud_list_ip_addresses` | read | List IP addresses |
| `upcloud_list_firewall_rules` | read | List server firewall rules |
| `upcloud_list_networks` | read | List networks |
| `upcloud_list_databases` | read | List managed databases |
| `upcloud_list_load_balancers` | read | List managed load balancers |
| `upcloud_list_kubernetes_clusters` | read | List Kubernetes clusters |
| `upcloud_list_object_storages` | read | List managed object storages |
| `upcloud_list_audit_logs` | read | List audit logs |
| `upcloud_start_server` | **write** | Start a server |
| `upcloud_stop_server` | **write** | Stop a server |
| `upcloud_restart_server` | **write** | Restart a server |
| `upcloud_create_storage_backup` | **write** | Back up a storage |
| `upcloud_modify_server` | **write** | Rename a server / set its backup schedule |
| `upcloud_usage_status` | meta | Usage status (free-tier meter) |
| `upcloud_upgrade` | meta | Upgrade to Pro (unlimited) |
| `upcloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `upcloud_upgrade` (it returns a Stripe Checkout link). Cancel any time with `upcloud_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `upcloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by UpCloud.
