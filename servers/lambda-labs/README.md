# Lambda Labs MCP by usefulapi

Use your [Lambda Labs](https://lambdalabs.com) account from Claude, Cursor, or any MCP client — read GPU instances, instance types, images, filesystems and firewall rules, and launch or terminate instances. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://lambda-labs.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lambda-labs.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lambda-labs https://lambda-labs.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lambda-labs&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flambda-labs.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lambda-labs": {
      "url": "https://lambda-labs.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lambda-labs/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Lambda Cloud API key** (Lambda Cloud dashboard → API keys). It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lambda_list_instances` | read | List instances |
| `lambda_get_instance` | read | Get instance |
| `lambda_list_instance_types` | read | List instance types |
| `lambda_list_images` | read | List images |
| `lambda_list_filesystems` | read | List filesystems |
| `lambda_list_firewall_rules` | read | List firewall rules |
| `lambda_list_firewall_rulesets` | read | List firewall rulesets |
| `lambda_get_firewall_ruleset` | read | Get firewall ruleset |
| `lambda_list_audit_events` | read | List audit events |
| `lambda_launch_instance` | **write** | Launch instance |
| `lambda_restart_instances` | **write** | Restart instances |
| `lambda_terminate_instances` | **write** | Terminate instances |
| `lambda_update_instance` | **write** | Update instance |
| `lambda_create_filesystem` | **write** | Create filesystem |
| `lambda_delete_filesystem` | **write** | Delete filesystem |
| `lambda_labs_usage_status` | meta | Usage status (free-tier meter) |
| `lambda_labs_upgrade` | meta | Upgrade to Pro (unlimited) |
| `lambda_labs_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `lambda_labs_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lambda_labs_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lambda_labs_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
