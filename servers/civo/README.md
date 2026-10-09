# Civo MCP by usefulapi

Use [Civo](https://www.civo.com) from Claude, Cursor, or any MCP client — list instances, Kubernetes clusters, networks, databases and DNS, and reboot or tag instances.
Hosted, no local install: connect with your own Civo credentials.

**Live endpoint:** `https://civo.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/civo

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://civo.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http civo https://civo.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=civo&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcivo.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "civo": {
      "url": "https://civo.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Civo credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/civo/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Civo API key** (Civo dashboard → Settings → Profile → Security), plus an optional default region.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `civo_list_regions` | read | List regions |
| `civo_get_quota` | read | Get account quota |
| `civo_list_charges` | read | List charges |
| `civo_list_instance_sizes` | read | List sizes |
| `civo_list_instances` | read | List instances |
| `civo_get_instance` | read | Get one instance |
| `civo_list_kubernetes_clusters` | read | List Kubernetes clusters |
| `civo_get_kubernetes_cluster` | read | Get one Kubernetes cluster |
| `civo_list_networks` | read | List networks |
| `civo_list_firewalls` | read | List firewalls |
| `civo_list_firewall_rules` | read | List a firewall's rules |
| `civo_list_load_balancers` | read | List load balancers |
| `civo_list_volumes` | read | List volumes |
| `civo_list_databases` | read | List databases |
| `civo_list_dns_domains` | read | List DNS domains |
| `civo_list_dns_records` | read | List DNS records |
| `civo_reboot_instance` | **write** | Reboot an instance |
| `civo_stop_instance` | **write** | Stop an instance |
| `civo_start_instance` | **write** | Start an instance |
| `civo_set_instance_tags` | **write** | Set an instance's tags |
| `civo_create_firewall_rule` | **write** | Add a firewall rule |
| `civo_create_dns_record` | **write** | Add a DNS record |
| `civo_usage_status` | meta | Usage status (free-tier meter) |
| `civo_upgrade` | meta | Upgrade to Pro (unlimited) |
| `civo_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `civo_upgrade` (it returns a Stripe Checkout link). Cancel any time with `civo_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `civo_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Civo.
