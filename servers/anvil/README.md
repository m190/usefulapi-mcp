# Anvil MCP by usefulapi

Fill and generate PDFs and run Etch e-signature packets from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Anvil API key.

**Live endpoint:** `https://anvil.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/anvil

## Add to Claude

```json
{
  "mcpServers": {
    "anvil": {
      "url": "https://anvil.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Anvil API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `anvil_current_user` | read | Current user |
| `anvil_get_organization` | read | Get organization |
| `anvil_get_cast` | read | Get cast |
| `anvil_get_etch_packet` | read | Get etch packet |
| `anvil_get_weld` | read | Get weld |
| `anvil_get_weld_data` | read | Get weld data |
| `anvil_fill_pdf` | **write** | Fill pdf |
| `anvil_generate_pdf` | **write** | Generate pdf |
| `anvil_create_etch_packet` | **write** | Create etch packet |
| `anvil_generate_etch_sign_url` | **write** | Generate etch sign url |
| `anvil_usage_status` | meta | Usage status (free-tier meter) |
| `anvil_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
