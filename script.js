document.addEventListener("DOMContentLoaded", () => {
    fetch('/api/data')
        .then(res => res.json())
        .then(data => {
            // Profile setup
            document.getElementById('user-name').innerText = data.profile.name;
            document.getElementById('user-title').innerText = data.profile.title;
            document.getElementById('email-link').href = `mailto:${data.profile.email}`;
            document.getElementById('phone-link').href = `tel:${data.profile.phone}`;
            document.getElementById('github-link').href = data.profile.github;
            document.getElementById('linkedin-link').href = data.profile.linkedin;

            // Render Skills
            const skillsContainer = document.getElementById('skills-container');
            const categories = [
                { label: "Languages", items: data.skills.languages },
                { label: "Frameworks & Web", items: data.skills.frameworks },
                { label: "Tools & Databases", items: data.skills.tools },
                { label: "Soft Skills", items: data.skills.soft_skills }
            ];
            categories.forEach(cat => {
                const row = document.createElement('div');
                row.className = "flex flex-wrap items-center gap-2";
                
                const label = document.createElement('span');
                label.className = "text-sm font-semibold text-slate-400 w-36";
                label.innerText = cat.label + ":";
                row.appendChild(label);

                const badges = document.createElement('div');
                badges.className = "flex flex-wrap gap-2";
                cat.items.forEach(item => {
                    const span = document.createElement('span');
                    span.className = "bg-blue-900/40 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold";
                    span.innerText = item;
                    badges.appendChild(span);
                });
                row.appendChild(badges);
                skillsContainer.appendChild(row);
            });

            // Render Experience
            const expContainer = document.getElementById('experience-container');
            data.experience.forEach(exp => {
                const card = document.createElement('div');
                card.className = "p-4 bg-slate-900/50 rounded-lg border border-slate-700/60";
                
                let highlightsHtml = exp.highlights.map(h => `<li>${h}</li>`).join('');
                card.innerHTML = `
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h3 class="font-bold text-lg text-slate-200">${exp.role}</h3>
                            <p class="text-sm text-blue-400">${exp.organization}</p>
                        </div>
                        <span class="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded border border-slate-700">${exp.date}</span>
                    </div>
                    <ul class="list-disc list-inside text-sm text-slate-300 space-y-1">
                        ${highlightsHtml}
                    </ul>
                `;
                expContainer.appendChild(card);
            });

            // Render Projects
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach(proj => {
                const card = document.createElement('div');
                card.className = "p-4 bg-slate-900/50 rounded-lg border border-slate-700/60 flex flex-col justify-between";
                
                let techBadges = proj.tech.map(t => `<span class="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded border border-slate-700">${t}</span>`).join('');
                
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-bold text-slate-200">${proj.name}</h3>
                            <span class="text-xs text-slate-400">${proj.date}</span>
                        </div>
                        <p class="text-xs text-slate-300 mb-4">${proj.desc}</p>
                    </div>
                    <div class="flex gap-1 flex-wrap">
                        ${techBadges}
                    </div>
                `;
                projectsContainer.appendChild(card);
            });

            // Render Certifications
            const certsContainer = document.getElementById('certifications-container');
            data.certifications.forEach(cert => {
                const item = document.createElement('li');
                item.className = "text-sm text-slate-300 flex justify-between items-center p-2 bg-slate-900/40 rounded border border-slate-700/40";
                item.innerHTML = `
                    <div>
                        <p class="font-semibold text-slate-200">${cert.title}</p>
                        <p class="text-xs text-slate-400">${cert.issuer}</p>
                    </div>
                    <span class="text-xs text-slate-400">${cert.date}</span>
                `;
                certsContainer.appendChild(item);
            });

            // Render Education
            const eduContainer = document.getElementById('education-container');
            data.education.forEach(edu => {
                const item = document.createElement('div');
                item.className = "p-3 bg-slate-900/40 rounded border border-slate-700/40 text-sm space-y-1";
                item.innerHTML = `
                    <div class="flex justify-between text-slate-200 font-semibold">
                        <h4>${edu.institution}</h4>
                        <span class="text-xs font-normal text-slate-400">${edu.period}</span>
                    </div>
                    <p class="text-xs text-blue-400">${edu.degree}</p>
                    <div class="flex justify-between text-xs text-slate-400">
                        <span>${edu.location}</span>
                        <span class="font-semibold text-slate-300">${edu.score}</span>
                    </div>
                `;
                eduContainer.appendChild(item);
            });
        });
});