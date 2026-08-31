# Codecov MCP by usefulapi

Read Codecov coverage reports, commits, pulls, flags and components. Hosted, no local install.

**Live endpoint:** `https://codecov.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "codecov": {
      "url": "https://codecov.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Codecov credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `codecov_list_service_owners` | read | List service owners |
| `codecov_get_owner` | read | Get owner |
| `codecov_list_users` | read | List users |
| `codecov_list_repos` | read | List repositories |
| `codecov_get_repo` | read | Get repository |
| `codecov_get_repo_config` | read | Get repository config |
| `codecov_list_branches` | read | List branches |
| `codecov_get_branch` | read | Get branch |
| `codecov_list_commits` | read | List commits |
| `codecov_get_commit` | read | Get commit |
| `codecov_list_commit_uploads` | read | List commit uploads |
| `codecov_list_pulls` | read | List pull requests |
| `codecov_get_pull` | read | Get pull request |
| `codecov_get_coverage_totals` | read | Get coverage totals |
| `codecov_get_coverage_report` | read | Get coverage report |
| `codecov_get_report_tree` | read | Get report tree |
| `codecov_get_file_coverage` | read | Get file coverage |
| `codecov_get_coverage_trend` | read | Get coverage trend |
| `codecov_list_flags` | read | List flags |
| `codecov_get_flag_coverage_trend` | read | Get flag coverage trend |
| `codecov_list_components` | read | List components |
| `codecov_compare` | read | Compare coverage |
| `codecov_compare_impacted_files` | read | Compare impacted files |
| `codecov_list_test_results` | read | List test results |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
