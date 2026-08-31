# Codemagic MCP by usefulapi

Trigger and inspect Codemagic CI builds, apps and artifacts. Hosted, no local install.

**Live endpoint:** `https://codemagic.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "codemagic": {
      "url": "https://codemagic.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
