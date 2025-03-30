import { useState, useCallback, useEffect, useRef } from 'react';
import { InputBase, styled, alpha, Paper, List, ListItemButton, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

// Sample pages for autocomplete - replace with your actual page routes
const pageSuggestions = [
  { title: 'Dashboard', path: '/' },
  { title: 'User Management', path: '/users' },
  { title: 'Users', path: '/users' },
  { title: 'Groups', path: '/groups' },
  { title: 'Settings', path: '/settings' },
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const filteredSuggestions = pageSuggestions.filter(suggestion =>
    suggestion.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = useCallback(() => {
    if (filteredSuggestions.length > 0) {
      router.push(filteredSuggestions[selectedIndex].path);
    } else if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
    setOpen(false);
  }, [query, router, filteredSuggestions, selectedIndex]);

  const handleSuggestionClick = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      inputRef.current?.focus();
      setOpen(true);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredSuggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    }
  }, [filteredSuggestions.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search... (Ctrl+K)"
        inputProps={{ 'aria-label': 'search' }}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(!!e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        inputRef={inputRef}
      />
      {open && query && (
        <Paper 
          sx={{
            position: 'absolute',
            width: '100%',
            zIndex: 1,
            mt: 1,
            maxHeight: 200,
            overflow: 'auto'
          }}
        >
          <List>
            {filteredSuggestions.map((suggestion, index) => (
              <ListItemButton
                key={suggestion.path}
                selected={index === selectedIndex}
                onMouseDown={() => handleSuggestionClick(suggestion.path)}
              >
                <ListItemText primary={suggestion.title} />
              </ListItemButton>
            ))}
            {filteredSuggestions.length === 0 && (
              <ListItemButton disabled>
                <ListItemText primary="No matches found" />
              </ListItemButton>
            )}
          </List>
        </Paper>
      )}
    </Search>
  );
}
