# Codemagic MCP by usefulapi

Trigger and inspect Codemagic CI builds, apps and artifacts. Hosted, no local install.

**Live endpoint:** `https://codemagic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://codemagic.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http codemagic https://codemagic.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=codemagic&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcodemagic.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "codemagic": {
      "url": "https://codemagic.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/codemagic/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Codemagic credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `codemagic_list_applications` | read | List applications |
| `codemagic_get_application` | read | Get application |
| `codemagic_list_builds` | read | List builds |
| `codemagic_get_build` | read | Get build |
| `codemagic_list_caches` | read | List caches |
| `codemagic_get_artifact_download_url` | read | Get artifact download URL |
| `codemagic_start_build` | **write** | Start build |
| `codemagic_cancel_build` | **write** | Cancel build |
| `codemagic_create_artifact_public_url` | **write** | Create artifact public URL |
| `codemagic_usage_status` | meta | Usage status (free-tier meter) |
| `codemagic_upgrade` | meta | Upgrade to Pro (unlimited) |
| `codemagic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `codemagic_upgrade` (it returns a Stripe Checkout link). Cancel any time with `codemagic_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `codemagic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
