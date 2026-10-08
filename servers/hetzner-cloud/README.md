# Hetzner Cloud MCP by usefulapi

Servers, volumes, networks, firewalls, load balancers, pricing and safe power operations. Hosted, no local install.

**Live endpoint:** `https://hetzner-cloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hetzner-cloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hetzner-cloud https://hetzner-cloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hetzner-cloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhetzner-cloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hetzner-cloud": {
      "url": "https://hetzner-cloud.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hetzner-cloud/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Hetzner Cloud credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hetzner_list_servers` | read | List servers |
| `hetzner_get_server` | read | Get one server |
| `hetzner_get_server_metrics` | read | Get server metrics |
| `hetzner_list_server_types` | read | List server types |
| `hetzner_list_images` | read | List images |
| `hetzner_list_locations` | read | List locations |
| `hetzner_get_pricing` | read | Get pricing |
| `hetzner_get_action` | read | Get one action |
| `hetzner_list_volumes` | read | List volumes |
| `hetzner_get_volumes` | read | Get one volume |
| `hetzner_list_networks` | read | List networks |
| `hetzner_get_networks` | read | Get one network |
| `hetzner_list_firewalls` | read | List firewalls |
| `hetzner_get_firewalls` | read | Get one firewall |
| `hetzner_list_load_balancers` | read | List load balancers |
| `hetzner_get_load_balancers` | read | Get one load balancer |
| `hetzner_list_ssh_keys` | read | List SSH keys |
| `hetzner_get_ssh_keys` | read | Get one SSH key |
| `hetzner_list_floating_ips` | read | List floating IPs |
| `hetzner_get_floating_ips` | read | Get one floating IP |
| `hetzner_list_primary_ips` | read | List primary IPs |
| `hetzner_get_primary_ips` | read | Get one primary IP |
| `hetzner_list_certificates` | read | List certificates |
| `hetzner_get_certificates` | read | Get one certificate |
| `hetzner_create_server` | **write** | Create a server |
| `hetzner_poweron_server` | **write** | Power on a server |
| `hetzner_shutdown_server` | **write** | Shut down a server |
| `hetzner_reboot_server` | **write** | Reboot a server |
| `hetzner_create_image_from_server` | **write** | Snapshot a server to an image |
| `hetzner_enable_server_backup` | **write** | Enable server backups |
| `hetzner_disable_server_backup` | **write** | Disable server backups |
| `hetzner_change_server_protection` | **write** | Change a server's protection |
| `hetzner_cloud_usage_status` | meta | Usage status (free-tier meter) |
| `hetzner_cloud_upgrade` | meta | Upgrade to Pro (unlimited) |
| `hetzner_cloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `hetzner_cloud_upgrade` (it returns a Stripe Checkout link). Cancel any time with `hetzner_cloud_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `hetzner_cloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
