# Infermedica MCP by usefulapi

Run Infermedica symptom checks, diagnosis, triage and condition lookups. Hosted, no local install.

**Live endpoint:** `https://infermedica.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "infermedica": {
      "url": "https://infermedica.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Infermedica credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `infermedica_list_symptoms` | read | List symptoms |
| `infermedica_get_symptom` | read | Get symptom |
| `infermedica_list_conditions` | read | List conditions |
| `infermedica_get_condition` | read | Get condition |
| `infermedica_list_risk_factors` | read | List risk factors |
| `infermedica_get_risk_factor` | read | Get risk factor |
| `infermedica_list_lab_tests` | read | List lab tests |
| `infermedica_get_lab_test` | read | Get lab test |
| `infermedica_search_concepts` | read | Search concepts |
| `infermedica_get_info` | read | Get model info |
| `infermedica_diagnosis` | read | Compute diagnosis |
| `infermedica_triage` | read | Compute triage |
| `infermedica_explain` | read | Explain condition |
| `infermedica_suggest` | read | Suggest observations |
| `infermedica_rationale` | read | Get question rationale |
| `infermedica_parse` | read | Parse clinical text |
| `infermedica_recommend_specialist` | read | Recommend specialist |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
