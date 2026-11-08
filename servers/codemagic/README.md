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

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Codemagic credentials.

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
| `codemagic_request_feature` | meta | Request a missing feature |
| `codemagic_upgrade` | meta | Upgrade to Pro or Pro+ |
| `codemagic_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `codemagic_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `codemagic_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `codemagic_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
