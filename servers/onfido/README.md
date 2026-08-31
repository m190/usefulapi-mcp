# Onfido MCP by usefulapi

Create and read Onfido applicants, documents, checks and reports. Hosted, no local install.

**Live endpoint:** `https://onfido.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "onfido": {
      "url": "https://onfido.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Onfido credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `onfido_list_applicants` | read | List applicants |
| `onfido_get_applicant` | read | Get applicant |
| `onfido_list_documents` | read | List documents |
| `onfido_get_document` | read | Get document |
| `onfido_list_checks` | read | List checks |
| `onfido_get_check` | read | Get check |
| `onfido_list_reports` | read | List reports |
| `onfido_get_report` | read | Get report |
| `onfido_list_workflow_runs` | read | List workflow runs |
| `onfido_get_workflow_run` | read | Get workflow run |
| `onfido_list_live_photos` | read | List live photos |
| `onfido_list_live_videos` | read | List live videos |
| `onfido_create_applicant` | **write** | Create applicant |
| `onfido_update_applicant` | **write** | Update applicant |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
