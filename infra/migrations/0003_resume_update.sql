-- Migration number: 0003 	 2026-01-14T13:30:00.000Z
-- Resume Items Table (Education, Experience, etc.)
CREATE TABLE IF NOT EXISTS resume_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL, -- 'education', 'experience', 'award', 'language', 'certificate'
    title TEXT NOT NULL, -- "Genel Koordinatör", "Doktora" etc.
    organization TEXT, -- "EXPERTGRUP", "Okan Üniversitesi" etc.
    start_date TEXT,
    end_date TEXT,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_resume_type ON resume_items(type);
