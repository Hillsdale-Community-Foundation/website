import { describe, it, expect } from 'vitest';
import { TZDate } from '@date-fns/tz';

describe('@date-fns/tz package', () => {
  it('should be available and functional', () => {
    const timeZone = 'America/New_York';
    
    // Test TZDate constructor
    const tzDate = new TZDate(2023, 5, 1, 12, 0, 0, timeZone); // Month is 0-indexed
    expect(tzDate).toBeInstanceOf(Date);
    expect(tzDate).toBeInstanceOf(TZDate);
  });
  
  it('should handle timezone operations correctly', () => {
    const timeZone = 'America/Los_Angeles';
    
    // Create a TZDate for a specific time zone
    const tzDate = new TZDate(2023, 5, 1, 12, 0, 0, timeZone); // June 1, 2023 12:00 PM in Los Angeles
    
    // The TZDate should be created successfully
    expect(tzDate.getFullYear()).toBe(2023);
    expect(tzDate.getMonth()).toBe(5); // June (0-indexed)
    expect(tzDate.getDate()).toBe(1);
    expect(tzDate.getHours()).toBe(12);
  });
  
  it('should work with different timezone formats', () => {
    // Test with IANA timezone name
    const tzDate1 = new TZDate(2023, 5, 1, 'Asia/Singapore');
    expect(tzDate1).toBeInstanceOf(TZDate);
    
    // Test with UTC offset
    const tzDate2 = new TZDate(2023, 5, 1, '+08:00');
    expect(tzDate2).toBeInstanceOf(TZDate);
  });
});