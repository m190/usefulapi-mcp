# Vultr MCP by usefulapi

Use your [Vultr](https://www.vultr.com) account from Claude, Cursor, or any MCP client. Read instances, billing, DNS records, firewall rules, load balancers, databases and Kubernetes clusters in your Vultr account. The server is read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://vultr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://vultr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http vultr https://vultr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=vultr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvultr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "vultr": {
      "url": "https://vultr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Vultr credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/vultr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Vultr API key** (Settings → API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `vultr_get_account` | read | Get account |
| `vultr_get_pending_charges` | read | Get pending charges |
| `vultr_list_invoices` | read | List invoices |
| `vultr_list_instances` | read | List instances |
| `vultr_get_instance` | read | Get instance |
| `vultr_get_instance_bandwidth` | read | Get instance bandwidth |
| `vultr_list_regions` | read | List regions |
| `vultr_list_plans` | read | List plans |
| `vultr_list_region_plan_availability` | read | List plans available in a region |
| `vultr_list_ssh_keys` | read | List SSH keys |
| `vultr_list_snapshots` | read | List snapshots |
| `vultr_list_bare_metal_servers` | read | List bare metal servers |
| `vultr_list_block_volumes` | read | List block storage volumes |
| `vultr_list_reserved_ips` | read | List reserved IPs |
| `vultr_list_firewall_groups` | read | List firewall groups |
| `vultr_list_firewall_rules` | read | List firewall rules |
| `vultr_list_load_balancers` | read | List load balancers |
| `vultr_get_load_balancer` | read | Get load balancer |
| `vultr_list_dns_domains` | read | List DNS domains |
| `vultr_list_dns_records` | read | List DNS records |
| `vultr_list_object_storages` | read | List object storage |
| `vultr_list_kubernetes_clusters` | read | List Kubernetes clusters |
| `vultr_get_kubernetes_cluster` | read | Get Kubernetes cluster |
| `vultr_list_kubernetes_nodes` | read | List Kubernetes nodes |
| `vultr_list_databases` | read | List managed databases |
| `vultr_get_database` | read | Get managed database |
| `vultr_usage_status` | meta | Usage status (free-tier meter) |
| `vultr_request_feature` | meta | Request a missing feature |
| `vultr_upgrade` | meta | Upgrade to Pro or Pro+ |
| `vultr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `vultr_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `vultr_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `vultr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
